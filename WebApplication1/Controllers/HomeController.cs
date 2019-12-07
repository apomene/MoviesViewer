using MovieViewer.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;


namespace MovieViewer.Controllers
{
    public class HomeController : Controller
    {
        
        public  async Task<ActionResult> Index()
        {
            //MovieModel movies = new MovieModel();
            MovieDBapiClient moviesClient = new MovieDBapiClient();
            var movies =  await moviesClient.GetPopularMovies(1);
            var res = JsonConvert.DeserializeObject<MovieModel.MoviePage>(movies);
            for (int i = 1; i < 10000; i++)
            {
                var movieImage = await moviesClient.GetMoviePoster(i);
                if (movieImage != null)
                {
                    var image = JsonConvert.DeserializeObject<MovieModel.ImageObject>(movieImage);
                    if (image.posters.Any())
                    {
                        string chexk = "1";
                    }
                }
            }
           
            return View();
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