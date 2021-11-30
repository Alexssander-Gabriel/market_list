import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria, Unidade } from 'src/app/app.module';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-produto-register',
  templateUrl: './produto-register.page.html',
  styleUrls: ['./produto-register.page.scss'],
})
export class ProdutoRegisterPage implements OnInit {
  form : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      descricao: ['', [Validators.required, Validators.minLength(1)]],
      categoria: [Categoria.A, Validators.required],
      preco: ['', Validators.required],
      unidade: [Unidade.UN, Validators.required],
      foto: ['', Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    const produto = this.produtoService.findById(id);
    if (produto) {
      this.form.patchValue({
        ...produto,
      });
    }
  }

  salvar() {
    this.produtoService.save(this.form.value);
    this.router.navigate(['produto-list']);
  }

}
