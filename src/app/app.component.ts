import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(PdfViewerComponent) private pdfComponent: PdfViewerComponent;
  src = 'https://cors-anywhere.herokuapp.com/https://d2i2ml1611820723.blob.core.windows.net/opal/data/archive/Actualisation_semestrielle_Rapport_sur_les_risques_Pilier_III_2020_VDEF.pdf';
  page = 1;
  
  pageRendered(e: CustomEvent) {
    this.search('banque');
  }

  search(stringToSearch: string) {
    this.pdfComponent.pdfFindController.executeCommand('find', {
      caseSensitive: false,
      findPrevious: undefined,
      highlightAll: true,
      phraseSearch: true,
      query: stringToSearch,
    });
  }
}
