import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Book } from '../../interfaces/book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  arrayBook: Book[] = []
  bookFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.bookFormGroup = formBuilder.group({
      id: [''],
      title: [''],
      nameauthor: [''],
      synopsis: [''],
      date: [''],
      genre: [''],
    })
  }

  submit(){
    this.arrayBook.push(this.bookFormGroup.value);
  }
}
