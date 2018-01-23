import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';
import * as App from '../../config/app';
import { RegisterServiceProvider } from '../../providers/register-service/register-service';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';
import { Storage } from '@ionic/storage';

import { ToastController } from 'ionic-angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
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

    constructor(public navCtrl: NavController, public navParams: NavParams, public registerService: RegisterServiceProvider,
        public alertCtrl: AlertController, public profileService: ProfileServiceProvider, public loadingCtrl: LoadingController,
        public storage: Storage, private transfer: FileTransfer, private camera: Camera,  public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController
    ) {
        this.form = {};

        this.setupExtraFields();
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
                this.myPhoto = imageData;
                // this.uploadPhoto(imageData);
            }, error => {
                this.toastShow(error);
                // this.error = JSON.stringify(error);
            });
    }

    selectPhoto(): void {
            this.camera.getPicture({
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: this.camera.DestinationType.FILE_URI,
                quality: 100,
                encodingType: this.camera.EncodingType.PNG,
            }).then(imageData => {
                this.myPhoto = imageData;
                //this.uploadPhoto(imageData);
            }, error => {
                // this.error = JSON.stringify(error);
                this.toastShow(error);
            });
    }

/*     getImage() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        }

        this.camera.getPicture(options).then((imageData) => {
            this.imageURI = imageData;
        }, (err) => {
            console.log(err);
            this.toastShow(err);
        });
    }

    uploadFile() {
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

        fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
            .then((data) => {
            console.log(data+" Uploaded Successfully");
            this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
            loader.dismiss();
            this.toastShow("Image uploaded successfully");
        }, (err) => {
            console.log(err);
            loader.dismiss();
            this.toastShow(err);
        });
    } */

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
        else if (this.form.age == undefined || this.form.age == '') {
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
        }
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
