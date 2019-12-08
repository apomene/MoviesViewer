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
            MoviesViewModel model = new MoviesViewModel();
            try
            {
                page = page <= 0 ? 1 : page;
                page = page >= 500 ? 500 : page;
            
                MovieDBapiClient moviesClient = new MovieDBapiClient();
                var movies = await moviesClient.GetPopularMovies(page);
                var res = JsonConvert.DeserializeObject<MovieModel.MoviePage>(movies);
                model.movies = res.results;
                model.pageNum = page;
                model.selectedMovieID = model.movies.Select(m => m.id).FirstOrDefault();
                return View(model);
            }
            catch(Exception ex)
            {
                //TO DO: Log maybe
                return View("Error");
            }         
        }

        

     

        
    }
}