import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ControleEditoraService } from "./controle-editora.service";
import { ControleLivrosService } from "./controle-livros.service";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

@NgModule ({
    imports: [
        BrowserModule,
        AppComponent,
        FormsModule,
    ],
    providers: [
        ControleEditoraService,
        ControleLivrosService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }