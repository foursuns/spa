import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'src/app/models/produto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'spa-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  ELEMENT_DATA: Produto[] = [
    { id: 1,  
      nome: 'Hambúrguer',
      categoria: 'Sanduíche', 
      descricao: 'Pão, bife de hambúrguer 90g, 1 fatia de queijo, salada e batata.',
      preco: 10.50,
      promocao: false 
    },
    { id: 2,  
      nome: 'X-Bacon',
      categoria: 'Sanduíche', 
      descricao: 'Pão, bife de hambúrguer 90g, 1 fatia de queijo, 2 fatia de bacon, salada e batata.',
      preco: 12.50,
      promocao: true
    },
    { id: 3,  
      nome: 'X-Búrguer',
      categoria: 'Sanduíche', 
      descricao: 'Pão, bife de hambúrguer 90g, 1 fatia de queijo, salada e batata.',
      preco: 11.50,
      promocao: false 
    },
    { id: 4,  
      nome: 'X-Tudo',
      categoria: 'Sanduíche', 
      descricao: 'Pão, 2 bifes de hambúrguer 90g, 2 fatias de queijo, 4 fatias de bacon, salada e batata.',
      preco: 14.50,
      promocao: false 
    },
    { id: 5,  
      nome: 'Coca-Cola 300ml',
      categoria: 'Refrigerante', 
      descricao: '',
      preco: 4.50,
      promocao: false 
    },
    { id: 6,  
      nome: 'Coca-Cola 600ml',
      categoria: 'Refrigerante', 
      descricao: '',
      preco: 6.50,
      promocao: false 
    }
  ];

  selectedRowIndex = -1;
  listProdutos: any;

  displayedColumns: string[] = [ 'id', 'categoria', 'nome', 'descricao', 'preco', 'promocao', 'opcoes' ];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onBack(): void {
    this.router.navigate(['/']);
  }

  onHighlight(row: any) {
    this.selectedRowIndex = row.id;
  }

  onRefresh() {
    this.listProdutos           = this.ELEMENT_DATA;
    this.listProdutos           = new MatTableDataSource(this.listProdutos);
    this.listProdutos.sort      = this.sort;
    this.listProdutos.paginator = this.paginator;
  }

}
