import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profileeditor.component.html'
})
export class ProfileEditorComponent {
    /*profileForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        address: new FormGroup({
          street: new FormControl(''),
          city: new FormControl(''),
          state: new FormControl(''),
          zip: new FormControl('')
        })
      });*/
      profileForm = this.fb.group({
        firstName: [''],
        lastName: [''],
        address: this.fb.group({
          street: [''],
          city: [''],
          state: [''],
          zip: ['']
        }),
        aliases: this.fb.array([
            this.fb.control('', Validators.required),
            this.fb.control('')
          ])
      });
     
      constructor(private fb: FormBuilder) { }
      
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      lastName: 'paul',
      address: {
        street: '123 Drew Street'
      },
      aliases: ['test', 'arrays', 'test1']
    });
  }
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
