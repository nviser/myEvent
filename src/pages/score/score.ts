import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventServiceProvider } from '../../providers/event-service/event-service';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';
import { ZBar, ZBarOptions } from '@ionic-native/zbar';

import { Storage } from '@ionic/storage';
import * as App from '../../config/app';
import { RegisterPage } from '../register/register';
import { DashboardPage } from '../dashboard/dashboard';
import { Events } from 'ionic-angular';


/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

const GAME_TYPE_INPUT: string = "game_type_text_input";
const GAME_TYPE_RULE: string = "game_type_image_rule";

//@IonicPage()
@Component({
    selector: 'page-score',
    templateUrl: 'score.html',
})
export class ScorePage {
    @ViewChild(Slides) slides: Slides;
    activityTitle: string;
    activities: Array<any>;
    participantScore: number;
    userId: string;
    userDrawId: String;
    hideScanScore: boolean;
    showCompleted: boolean;
    current_type: string;
    hasUserRedeem: boolean;
    activityListIndex: any;
    activityViewScore: any;
    hideViewScore: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams, public eventService: EventServiceProvider, public zbar: ZBar,
        public loadingCtrl: LoadingController, public alertCtrl: AlertController, public storage: Storage, public events: Events, private apiProvider: ApiServiceProvider) {
        this.hideScanScore = true;
        this.participantScore = 0;
        this.showCompleted = false;
        this.current_type = '';
        this.hasUserRedeem = false;
        this.hideViewScore = true;
        this.loadLiveEventDetail();
        this.loadParticipantScore();
        
        storage.get(App.STORAGE_APP_HAS_REDEEM)
            .then((val) => {
                this.hasUserRedeem = val;
            });
    
    }

    // ngOnInit() {
    //     this.storage.get("nav")
    //         .then((val) => {
    //             if(val=="slide2") {
    //                 this.storage.remove('nav');
    //                 this.showActivitesList();
    //             }
    //             if (val == "view_score"){
    //                 this.storage.remove('nav');
    //                 this.showActivityViewScore();
    //                 this.hideViewScore = false;
    //             }
    //         });
    // }

    scanQRCode() {
        // Check is Game Type Input fill up all the input
        let currentIndex = this.slides.getActiveIndex();
        let activity = this.activities[currentIndex];

        var canScan = true;
        if (activity.type == GAME_TYPE_INPUT) {
            let fields = activity.game.fields;

            fields.forEach((field: any) => {
                if (field.value == undefined || field.value == null || field.value.length <= 0) {
                    canScan = false;
                }
            });
        }

        if (canScan) {
            let options: ZBarOptions = {
                flash: 'off',
                drawSight: false
            }
            this.zbar.scan(options)
                .then(result => {
                    this.markGameComplete(result);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        else {
            this.showAlertMessage("Please fill up all the blank field.");
        }
    }

    markGameComplete(scoreCode) {
        let currentIndex = this.slides.getActiveIndex();
        let activity = this.activities[currentIndex];

        if (activity != undefined) {
            let loading = this.loadingCtrl.create({
                content: 'Processing. Please wait...'
            });
            loading.present();

            this.eventService.markGameComplete(scoreCode, activity.stage.id, activity.game.id, activity.game_type, activity.game.fields)
                .then((data: any) => {
                    loading.dismiss();
                    if (data.success) {
                        this.showAlertMessage("Successfully collected " + data.content.added_score + " points");
                        this.participantScore = data.content.new_score;


                    }
                    else {
                        this.showAlertMessage(data.message);
                    }

                    if (data.completed) activity.completed = true;

                    this.invalidateShowScanScore();
                    this.invalidateShowCompleted();
                })
                .catch(error => {
                    loading.dismiss();
                    console.log(error);
                });
        }
    }

    loadParticipantScore() {
        this.eventService.getParticipantScore()
            .then((data: any) => {
                if (data.success) {
                    this.userId = data.content.userId;
                    this.userDrawId = data.content.drawId;
                    this.participantScore = data.content.score;

                    this.events.publish('profile:updated', {
                        id: this.userId,
                        drawId: this.userDrawId
                    });
                }
            });
    }

    processDataIntoActivities(data) {
        // clear
        this.activities = [];
        this.activityListIndex = 0;
        this.activityViewScore = 0;
        // banners
        let banners = data.banners;
        banners.forEach((banner: any) => {
            this.activities.push({
                ...banner,
                type: 'banner'
            });
            this.activityListIndex++;
            this.activityViewScore++;
        });

        // activities
        let activityList = data.activities;

        this.activities.push({
            title: data.title,
            type: 'activity_list',
            activities: activityList
        });
        this.activityViewScore++;
        // games
        let games = data.games;
        games.forEach((game: any) => {
            this.activities.push({
                ...game,
                title: game.stage.title,
                type: game.game_type
            });
            this.activityViewScore++;
        });
        
        // Score
        this.activities.push({
            title: 'Score',//Score
            type: 'score'
        });

        // Redeem
        this.activities.push({
            title: '',//Score
            type: 'redeem'
        });
        console.log(this.activities);

        this.activityTitle = this.activities[0].title;
    }

    showGameActivity(gameType, gameId) {
        var activityIndex = -1;
        var count = 0;
        this.activities.forEach((activity: any) => {

            if (activity.type == GAME_TYPE_INPUT || activity.type == GAME_TYPE_RULE) {
                if (gameId == activity.game.id) {
                    activityIndex = count;
                }
            }

            count++;
        });

        if (activityIndex >= 0) {
            this.slides.slideTo(activityIndex, 200);
        }
    }

    showScoreActivity() {
        var scoreActivityIndex = -1;
        var count = 0;
        this.activities.forEach((activity: any) => {
            if (activity.type == 'score') {
                scoreActivityIndex = count;
            }

            count++;
        });

        if (scoreActivityIndex >= 0) {
            this.slides.slideTo(scoreActivityIndex, 200);
        }
    }

    showPreviousActivity() {
        this.slides.slidePrev(200);
    }

    showNextActivity() {
        this.slides.slideNext(200);
    }

    public showActivitesList(){        
        setTimeout(() => {
            if (this.activityListIndex < 0)
                this.activityListIndex = 0;
            this.slides.slideTo(this.activityListIndex, 200);
            
        }, 2000);
        // this.slides.slideTo(2, 200);
    }

    showActivityViewScore(){
        setTimeout(() => {
            if (this.activityViewScore < 0)
                this.activityViewScore = 0;
            this.slides.slideTo(this.activityViewScore, 200);
            
        }, 2000);
    }
    invalidateShowScanScore() {
        let currentIndex = this.slides.getActiveIndex();
        let activity = this.activities[currentIndex];

        this.current_type = activity.type;
        this.hideScanScore = (activity.type != GAME_TYPE_INPUT && activity.type != GAME_TYPE_RULE) || activity.completed;
    }

    invalidateShowCompleted() {
        let currentIndex = this.slides.getActiveIndex();
        let activity = this.activities[currentIndex];
        console.log(this.activities[currentIndex]);
        console.log(this.activityTitle);
        this.showCompleted = activity.completed;
    }

    loadLiveEventDetail() {
        this.eventService.getLiveEventDetail().then((data: any) => {
            if (data.success) {
                this.processDataIntoActivities(data.content);
            }
        }).catch((error) => {
            this.storage.set(App.STORAGE_APP_HAS_LOGIN, false);
            // go register page
            this.navCtrl.setRoot(RegisterPage);
        });
    }

    onGameTextInput(value, gameId, fieldId) {
        // Record the value
        let currentIndex = this.slides.getActiveIndex();
        let activity = this.activities[currentIndex];
        let fields = activity.game.fields;

        fields.forEach((field: any) => {
            if (field.id == fieldId) {
                field.value = value
            }
        });
    }

    acitivityChanged() {
        let currentIndex = this.slides.getActiveIndex();
        let activity = this.activities[currentIndex];

        if (activity != undefined) {
            this.activityTitle = activity.title;    
        
            // check need show scan score
            this.invalidateShowScanScore();
            this.invalidateShowCompleted();
        }
    }

    showAlertMessage(message) {
        let alert = this.alertCtrl.create({
            title: 'Notice',
            message: message,
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel'
                }
            ]
        });

        alert.present();
    }

    backToHome() {
        this.slides.slideTo(0, 200);
    }

    redeem() {
        let alert = this.alertCtrl.create({
            title: "You'll not able to participated in any game.",
            message: '',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Redeem!',
                    handler: () => {

                        console.log("App Path", App.API_ENDPOINT);
                        console.log("redeem user id", this.userId);
                        this.eventService.setRedeem(this.userId)
                            .then((data: any) => {
                                if (data.success) {
                                    this.storage.set(App.STORAGE_APP_HAS_REDEEM, true);
                                    this.navCtrl.setRoot(ScorePage);
                                }
                                else {
                                    this.showAlertMessage(data.message);
                                }
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    }
                }
            ]
        });

        alert.present();
    }

}
