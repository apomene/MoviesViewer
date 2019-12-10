using MovieViewer.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using MovieViewer.ViewModel;


namespace MovieViewer.Controllers
{
    public class HomeController : Controller
    {
        MovieDBapiClient moviesClient = new MovieDBapiClient();
        public async Task<ActionResult> Index(int page=1)
        {
            MoviesViewModel model = new MoviesViewModel();
            try
            {
                page = page <= 0 ? 1 : page;
                page = page >= 500 ? 500 : page;
                           
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

        [HttpPost]
        public async Task<ActionResult> GetGenreNames(int[] genresIds)
        {
            List<string> result = new List<string>();
            try
            {
                var genreNames = await moviesClient.GetGenreNames();
                var res = JsonConvert.DeserializeObject<MovieModel.Genres>(genreNames);
                
                result = res.genres.Where(g => genresIds.Contains(g.id)).Select(g => g.name).ToList();
            }
            catch
            {
                return Json("Server Error, could not retrieve genre names");
            }

            return Json(result);
        }
       /// <summary>
       /// Calculate weighted rating based bot on votes count and votes average
       /// </summary>
       /// <param name="votes">votes count</param>
       /// <param name="votesAverage">votes average</param>
        private void WeightedRating(int votes,float votesAverage)
        {
            try
            {
                //TO DO

            }
            catch (Exception ex)
            {
                //TO DO: Log maybe
            }
        }

       
    }
}