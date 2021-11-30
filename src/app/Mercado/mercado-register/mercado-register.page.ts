import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Atendimento, Mercado } from 'src/app/app.module';
import { MercadoService } from 'src/app/mercado.service';

@Component({
  selector: 'app-mercado-register',
  templateUrl: './mercado-register.page.html',
  styleUrls: ['./mercado-register.page.scss'],
})
export class MercadoRegisterPage implements OnInit {
  form : FormGroup;
  fotinho : string;
  username : any;

  constructor(
    private formBuilder: FormBuilder,
    private mercadoService: MercadoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      endereco: ['', Validators.required],
      contato: [''],
      atendimento: [Atendimento.FF, Validators.required],
      foto: ['', Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    const mercado = this.mercadoService.findById(id);
    if (mercado) {
      this.form.patchValue({
        ...mercado
      });
    }
    
  
  }

  salvar() {
    this.mercadoService.save(this.form.value);
    this.router.navigate(['mercado-list']);
  }


}
