import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { lastValueFrom } from 'rxjs';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {

    form: FormGroup;
    loading = false;
    submitted = false;
    error: string;

    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthService,
        private route: Router,
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({

            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.auth.login(this.form.value.username, this.form.value.password)
    }
}

