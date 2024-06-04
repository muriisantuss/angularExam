import { FormBuilder, FormGroup} from '@angular/forms';
import { Component } from '@angular/core';
import { Author } from '../../interfaces/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  arrayAuthor: Author[] = []
  authorFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.authorFormGroup = formBuilder.group({
      id: [''],
      fullname: [''],
      pseudonym: [''],
      born: [''],
      nationality: [''],
    })
  }
  submit(){
    this.arrayAuthor.push(this.authorFormGroup.value);
  }
}
