import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';
import * as App from '../../config/app';
import { RegisterServiceProvider } from '../../providers/register-service/register-service';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';
import { Storage } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

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

    constructor(public navCtrl: NavController, public navParams: NavParams, public registerService: RegisterServiceProvider,
        public alertCtrl: AlertController, public profileService: ProfileServiceProvider, public loadingCtrl: LoadingController,
        public storage: Storage, private barcodeScanner: BarcodeScanner) {
        this.form = {};

        this.setupExtraFields();
    }

    createCode() {
        if(this.form.key_in_company_name !== undefined 
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
        else if (this.form.key_in_company_name == undefined || this.form.key_in_company_name == '') {
            this.showAlertMessage('Key in company name is required');
            return false;
        }
        else if (this.form.designation == undefined || this.form.designation == '') {
            this.showAlertMessage('designation is required');
            return false;
        }
        else if (this.form.website == undefined || this.form.website == '') {
            this.showAlertMessage('website is required');
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
