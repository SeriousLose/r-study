import Article from '../../components/Article/Article';
import ArticleList from '../../components/ArticleList/ArticleList';


const routes = [
  {
    path: "/list",
    component: ArticleList,
    // routes: [
    //   {

    //   }
    // ]
  }, {
    path: "/:id",
    component: Article
  },
  {
    path: "/detail",
    component: Article
  }
];


export default routes