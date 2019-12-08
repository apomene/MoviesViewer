using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

namespace MovieViewer
{
    internal class MovieDBapiClient
    {
        private string _apiKey = "9198fa6d9a9713bc6b03ee9582525917";
        private string _baseURL = "https://api.themoviedb.org/3/movie";
        private string _inageURL = "https://image.tmdb.org/t/p/w500/";

        internal async Task<string> GetPopularMovies(int page = 1)
        {
            try
            {
                var client = new HttpClient();
                var response = await client.GetStringAsync($"{_baseURL}/popular?api_key={_apiKey}&page={page}");
                return response;
            }
            catch (Exception ex)
            {
                //TO DO: Log
                return null;
            }
        }

        internal async Task<string> GetMoviePoster(int movie_id)
        {
            try
            {
                //"https://api.themoviedb.org/3/movie/467/images?api_key=9198fa6"
                var client = new HttpClient();
                var response = await client.GetStringAsync($"{_baseURL}/{movie_id}/images?api_key={_apiKey}");
                return response;
            }
            catch (Exception ex)
            {
                //TO DO: LOG
                return null;
            }
        }
    }

    
}