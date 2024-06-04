import { BookService } from './../../services/book.service';
import { AuthorService } from '../../services/author.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Book } from '../../interfaces/book';
import { Author } from '../../interfaces/author';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  arrayBook: Book[] = []
  arrayAuthor: Author[] = []
  bookFormGroup: FormGroup;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private bookService: BookService, private authorService: AuthorService){
    this.bookFormGroup = formBuilder.group({
      id: [''],
      title: [''],
      nameauthor: [''],
      synopsis: [''],
      date: [''],
      genre: [''],
    })
  }

  ngOnInit(): void {
    this.loadBook();
    this.loadAuthor();
  }

  loadBook() {
    this.bookService.getBook().subscribe({
      next: (data) => (this.arrayBook = data),
    });
  }

  loadAuthor() {
    this.authorService.getAuthor().subscribe({
      next: (data) =>(this.arrayAuthor = data),
    });
  }

  compare(autor1: Author, autor2: Author): boolean {
    return autor1 && autor2
      ? autor1.id === autor2.id
      : autor1 === autor2;
  }

  getAuthorName(authorId: number): Author | undefined {
    return this.arrayAuthor.find((c) => c.id === authorId);
  }

  submit() {
    if (this.isEditing) {
      this.bookService.modify(this.bookFormGroup.value).subscribe({
        next: () => {
          this.loadBook();
          this.isEditing = false;
          this.bookFormGroup.reset();
        },
      });
    } else {
      this.bookService.save(this.bookFormGroup.value).subscribe({
        next: data => {
          this.arrayBook.push(data);
          this.bookFormGroup.reset();
        },
      });
    }
  }

  delete(variable: Book) {
    this.bookService.delete(variable).subscribe({
      next: () => this.loadBook(),
    });
  }

  update(variable: Book) {
    this.isEditing = true;
    this.bookFormGroup.setValue(variable);
  }

}
