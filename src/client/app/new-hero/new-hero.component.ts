import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IHeroState } from '../store/model';
import { HeroActions } from '../store/hero.actions';
import { Hero } from '../models/hero';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private actions: HeroActions) {
    }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const controls = this.form.controls;
    if (this.form.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    this.actions.addHero(this.form.value);
    this.form.reset();
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  private initForm() {
    this.form = this.fb.group({
      name: ['', [ Validators.required]],
      age: [, [Validators.min(1)]]
    });
  }
}
