using MovieViewer.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using MovieViewer.ViewModel;


namespace MovieViewer.Controllers
{
    public class HomeController : Controller
    {
        
        public  async Task<ActionResult> Index()
        {
            MoviesViewModel model = new MoviesViewModel();
            MovieDBapiClient moviesClient = new MovieDBapiClient();
            var movies =  await moviesClient.GetPopularMovies(1);
            var res = JsonConvert.DeserializeObject<MovieModel.MoviePage>(movies);
            model.movies = res.results;

            return View(model);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        
    }
}