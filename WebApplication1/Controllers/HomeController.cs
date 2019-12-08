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
        
        public  async Task<ActionResult> Index(int page=1)
        {
            page = page <= 0 ? 1 : page;
            MoviesViewModel model = new MoviesViewModel();
            MovieDBapiClient moviesClient = new MovieDBapiClient();
            var movies = await moviesClient.GetPopularMovies(page);
            var res = JsonConvert.DeserializeObject<MovieModel.MoviePage>(movies);
            model.movies = res.results;
            model.pageNum = page;
            return View(model);
        }

        [HttpPost]
        public async Task<ActionResult>  GetMovies(int page)
        {
            MovieDBapiClient moviesClient = new MovieDBapiClient();
            List<string[]> response = new List<string[]>();
            var movies = await moviesClient.GetPopularMovies(page);
            var res = JsonConvert.DeserializeObject<MovieModel.MoviePage>(movies);
            foreach (var movie in res.results)
            {
                response.Add(new string[] { movie.id.ToString(), movie.poster_path, movie.overview, movie.title });
            }
            return Json(response);
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        
    }
}