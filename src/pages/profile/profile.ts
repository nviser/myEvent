import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';
import * as App from '../../config/app';
import { RegisterServiceProvider } from '../../providers/register-service/register-service';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';
import { Storage } from '@ionic/storage';

import { ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

    profile: any;
    extraFields: [{id:string, name:string}];

    form: any;
    selectedGender: string;
    qrData: any = null;
    createdCode: any = null;

    imageURI:any;
    imageFileName:any;

    myPhoto: any;
    testPhoto: any = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUNSURBVHjarJZdSBxXGIbfmdmZXbM/cZOssmHjH3HLuoRY1nVtMSokF4n5IbkoaS1IetFKITepYqFQcpO7tjRtIaWlvagpvRFMf8BALowhQpoEtGDiBiWWsFlc0erozu64szPn60U7YaM72zXNB+di5nznfc55zzfnDNff3w8AsNvtWFpaQiKRAGMM8/Pz2L17NyRJwvLyMhwOxwlZljvS6XTQ6XS+trCwUGEYBgKBgKFp2u8cx8243e4Jj8dzTVEU6LoOu92OhoYGZLNZNDY2IhAIQFVVAIANRYKIUFFRAUEQ+FQq9VEymXwrm802mf3Ly8vPcp88eQIAR/9tHzidzj89Hs+Q0+n8ZMeOHRlYxHNgxhhsNhvcbjfi8fiJRCLxpSzL9WY/x3EoFUSETCZTn8lkLkqS9D5jrD8YDP6Yz+fBGLMG2+12AMDjx48/ffr0aX+5wGJ5mqZVzc/PX3U6nYf37dv3jsPhABGBiAAAPBGBMQZBEOD1ejE1NfXN5ORkvylULtRqEtPT0+fu3bv3W2VlJXieh67rMAwDQjQaBQA4HA6Mjo5emp2dvbCdVZYDz2azQVmWa3t6en4JBALw+XwQOjo6UFNTgwcPHhy+cePGdy8DatpZ6Nji4uKrHMclGGNTDx8+hBAKhZBKpTAyMjKpaZrjZUDr6uogy/IW+PT09FHG2Bf5fF7jRVFEPB4fVBSl8mVAo9Eo5ubmMDw8vGX1AOyGYVyKRCLAkSNHIEnSAgDiOO6FGgACQC0tLaTrOplx5coVstlsm/PywWAQOHXq1FHzpZVgOeDW1tbnoGYMDAw80zD1mpqaehAOhz+3EjcTS8EB0MGDB4kxtgV6+/Ztqq+vf248AKqurh5GbW3tqNVq29raaGhoqCi80F5FUbZAb926ZTnO4/H8gcbGxtVinfv376e1tTUiIhofH98iUsremzdvWjoFgHw+XxqSJG1sFuzs7CwpBoBisVhRe0tBTX2bzZaBJEnaZvCxY8eoWIyNjREAqqurI8Mwyra3KNjv9y8Ws7qlpcUSnkwmixZSOV8BAPJ6vWmIojhiVc2dnZ1F93Bz3L17l3iep3LPAlEUp9DU1PRVqf2IRqMl4ePj4yQIQtlQAOT3+3/FyZMnT5eqQAAUiUQon89b7vl2oACou7v7XYRCIQBY+K+C2HwcbhdaCD5w4ICA8+fPo729/WI5RRGNRomIKB6PbxtqasRise8HBwfBy7IMr9d7CcC6eZNYxf3799Ha2or29nZs9942td1u94epVArC3r17sWvXLnK5XI8SicSbVoLmvZpMJqGq6gtBjx8/fiESiYyl02nYurq6IAgCDh069DPP899OTEy8R0SWwtu9s01oOBy+3tfXd5kxho2NDdj8fj8YY/D5fOjt7e2bmZmpWllZOV0Kvl3onj177pw9e7Z7bm4Oq6ur4HkevKZp0HUd6+vrWFlZQSwWOxMOh68WDvw/ULfb/VMoFHpd0zTkcjkIggCO48AXWqiqKkRRRHNzc29VVdU5SZJWzH/hcidRkJtra2sbaG5ufluWZeRyOfA8/6xW+MJBPM9D0zSsra1h586dP7zyT1wWRfEvjuOweRKFz2aTJEn2+XxfOxyOxurq6s8AQNf1Ldtms5q5qqpwuVzLNTU1FxRF+Zjn+TMNDQ1vGIbRNTs7i6WlJYiiCLvdniOipMvlesQYu05E1/x+/7qiKFBVFYZhFK2VvwcADLdjH0wVaB4AAAAASUVORK5CYII=';

    constructor(public navCtrl: NavController, public navParams: NavParams, public registerService: RegisterServiceProvider,
        public alertCtrl: AlertController, public profileService: ProfileServiceProvider, public loadingCtrl: LoadingController,
        public storage: Storage, private transfer: FileTransfer, private camera: Camera,  public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController
    ) {
        this.form = {};

        this.setupExtraFields();
        this.getUserLogo();
    }

    getUserLogo() {
        // set default image
        this.storage.get(App.STORAGE_APP_USER_PHOTO).then((val) => {
            this.myPhoto = val;
        });
    }

    toastShow(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });

        toast.present();
    } 

    addPhoto() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Choose source',
            buttons: [
            {
                text: 'Use camera',
                handler: () => {
                    this.takePhoto();
                }
            },
            {
                text: 'Use album',
                handler: () => {
                    this.selectPhoto();
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
            }
            ]
        });

        actionSheet.present();
    }

    takePhoto() {
            const options: CameraOptions = {
                quality: 100,
                destinationType: this.camera.DestinationType.FILE_URI,
                sourceType: this.camera.PictureSourceType.CAMERA,
                encodingType: this.camera.EncodingType.PNG,
            }
            this.camera.getPicture(options).then(imageData => {
                this.myPhoto = /* 'data:image/jpeg;base64,' +  */imageData;
                //this.uploadPhoto(this.myPhoto);
                this.storage.set(App.STORAGE_APP_USER_PHOTO, this.myPhoto);
            }, error => {
                // this.error = JSON.stringify(error);
                this.toastShow(JSON.stringify(error));
            });
    }

    selectPhoto(): void {
             this.camera.getPicture({
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: this.camera.DestinationType.FILE_URI,
                quality: 100,
                encodingType: this.camera.EncodingType.PNG,
            }).then(imageData => {
                this.myPhoto = /* 'data:image/jpeg;base64,' +  */imageData;
                //this.uploadPhoto(this.myPhoto);
                this.storage.set(App.STORAGE_APP_USER_PHOTO, this.myPhoto);
            }, error => {
                // this.error = JSON.stringify(error);
                this.toastShow(JSON.stringify(error));
            }); 
                //this.uploadPhoto(this.testPhoto);
    }

    uploadPhoto(img) {
        let loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        const fileTransfer: FileTransferObject = this.transfer.create();

        let options: FileUploadOptions = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        }

        fileTransfer.upload(img, App.API_ENDPOINT + '/profile/uploadImage', options)
            .then((data) => {
                console.log(data+" Uploaded Successfully");
                //this.imageFileName = data;//"http://192.168.0.7:8080/static/images/ionicfile.jpg"
                loader.dismiss();
                this.toastShow("Image uploaded successfully");
        }, (err) => {
            console.log(err);
            loader.dismiss();
            this.toastShow(JSON.stringify(err));
        });
    }

    createCode() {
        if( this.form.age !== undefined 
            && this.form.age !== ''
            && this.form.key_in_company_name !== undefined 
            && this.form.key_in_company_name !== ''
            && this.form.designation !== undefined 
            && this.form.designation !== ''
            && this.form.website !== undefined 
            && this.form.website !== ''
        ) {
            this.createdCode = JSON.stringify(this.form);
        }
    }

    setupExtraFields() {
        this.registerService.getExtraFields().then((data:any) => {
            if (data.success) {
                this.extraFields = data.content;
            }

            this.loadParticipantProfile();
        });
    }

    loadParticipantProfile() {
        this.profileService.getProfile().then((data:any) => {
            if (data.success) {
                this.processParticipantProfileToForm(data.content);
            }
        });
    }

    processParticipantProfileToForm(data:any) {
        this.profile = data.profile;
        let profile = data.profile;
        console.log(this.profile);
        this.form = {
            name: profile.name,
            identity_passport: profile.identity_passport,
            email: profile.email,
            mobile_number: profile.mobile_number,
            gender: profile.gender,
            age: profile.age,
            key_in_company_name: profile.key_in_company_name,
            designation: profile.designation,
            website: profile.website
        };
        this.selectedGender = profile.gender;
        this.createCode();

        // extra fields
        let fields = data.extra_fields;
        fields.forEach((field:any) => {

            this.extraFields.forEach((extraField:any) => {
                if (field.id == extraField.id) {
                    extraField.value = field.value;
                }

                // update form model as well
                this.extraFieldInputChange(field.value, field.id);
            });
        });
    }

    saveUserProfile(user) {
        this.storage.set(App.STORAGE_APP_USER, user);
    }

    updateProfile() {
        let loading = this.loadingCtrl.create({
            content: 'Updating. Please wait...'
        });
        loading.present();
        this.profileService.updateProfile(this.form).then((data:any) => {
            loading.dismiss();

            this.saveUserProfile(data.content);
        });
    }

    onSubmitForm() {
        // Check if all compulsory selection is selected
        if (this.canSubmit()) {
            this.updateProfile();
            this.createCode();
        }
    }

    canSubmit() {

        if (this.form.name == undefined || this.form.name == '') {
            this.showAlertMessage('Name is required');
            return false;
        }
        // else if (this.form.identity_passport == undefined || this.form.identity_passport == '') {
        //     this.showAlertMessage('IC / Passport is required');
        //     return false;
        // }
        else if (this.form.email == undefined || this.form.email == '') {
            this.showAlertMessage('Email is required');
            return false;
        }
        else if (!this.validateEmail(this.form.email)) {
            this.showAlertMessage('Email is not valid');
            return false;
        }
        else if (this.form.mobile_number == undefined || this.form.mobile_number == '') {
            this.showAlertMessage('Mobile number is required');
            return false;
        }
       /*  else if (!this.validatePhoneNumber(this.form.mobile_number)){
            this.showAlertMessage('Mobile number should be digit 10');
            return false;
        } */
        else if (this.form.gender == undefined || this.form.gender == '') {
            this.showAlertMessage('Gender is required');
            return false;
        }
        /* else if (this.form.age == undefined || this.form.age == '') {
            this.showAlertMessage('Age is required');
            return false;
        }
        else if (this.form.key_in_company_name == undefined || this.form.key_in_company_name == '') {
            this.showAlertMessage('Company name is required');
            return false;
        }
        else if (this.form.designation == undefined || this.form.designation == '') {
            this.showAlertMessage('Designation is required');
            return false;
        } */
        else if (this.form.website == undefined || this.form.website == '') {
            this.showAlertMessage('Website is required');
            return false;
        }

        return true;
    }

    selectGender(gender) {
        this.selectedGender = gender;
        this.form.gender = gender;
    }

    extraFieldInputChange(value, fieldId) {
        this.form[fieldId] = value;
    }

    showGenderSelection() {
        let alert = this.alertCtrl.create({
            title: 'Choose Gender',
            message: '',
            buttons: [
                {
                    text: 'Male',
                    handler: () => {
                        this.selectGender('male');
                    }
                },
                {
                    text: 'Female',
                    handler: () => {
                        this.selectGender('female')
                    }
                }
            ]
        });

        alert.present();
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

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validatePhoneNumber(phone_number){
        var len = phone_number.length;
        if (len != 10){
            return false
        }
        return true;
    }
}
