import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipo } from 'src/app/app.module';
import { ListaService } from 'src/app/lista.service';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.page.html',
  styleUrls: ['./lista-item.page.scss'],
})
export class ListaItemPage implements OnInit {
  form : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private listaService: ListaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      descricao: ['', [Validators.required, Validators.minLength(3)]],
      produto: ['', Validators.required],
      quantidade: [''],
      valorTotal: ['', Validators.required],
      tipo: [Tipo.CR, Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    const lista = this.listaService.findById(id);
    if (lista) {
      this.form.patchValue({
        ...lista
      });
    }
  }
  salvar() {
    this.listaService.save(this.form.value);
    this.router.navigate(['games-list']);
  }
}
