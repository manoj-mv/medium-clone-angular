import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'feed', loadChildren: () => import('src/app/your-feed/your-feed.module').then(module => module.YourFeedModule),
  },

  {
    path: 'articles/new', loadChildren: () => import('src/app/create-article/create-article.module').then(
      m => m.CreateArticleModule
    ), pathMatch: "full"
  },

  {
    path: 'articles/:slug/edit', loadChildren: () => import('src/app/edit-article/edit-article.module').then(m => m.UpdateArticleModule)
  },

  {
    path: 'articles/:slug', loadChildren: () => import('src/app/article/article.module').then(m => m.ArticleModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
