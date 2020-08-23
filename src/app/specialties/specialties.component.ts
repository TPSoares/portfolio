import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent implements OnInit {

  public specialties: Array<object> = [
    {
      title: 'Experiência personalizada',
      description: 'Obtenha o layout desejado para sua aplicação, dando uma melhor experiência ao seu usuário.',
      svgPath: '/assets/svg/web-icon.svg',

    },
    {
      title: 'Design Responsivo',
      description: 'Um design responsivo acessível para todos os usuários, indepedente do dispositivo utilizado.',
      svgPath: '/assets/svg/mobile-friendly.svg',

    },
    {
      title: 'Gerenciamento de conteúdo',
      description: 'Gerencie! Atualize ou adicione conteúdos ao seu negócio sem conhecimentos de código.',
      svgPath: '/assets/svg/cms.svg',

    },
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
