using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Configuration;

namespace MovieViewer
{
    internal class MovieDBapiClient
    {
        private readonly string _apiKey = ConfigurationManager.AppSettings["apiKey"];
        private string _baseURL = "https://api.themoviedb.org/3/movie";
        private string _genresURL = "https://api.themoviedb.org/3/genre/movie/list?";

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

        internal async Task<string> GetGenreNames()
        {
            try
            {
                var client = new HttpClient();
                var response = await client.GetStringAsync($"{_genresURL}api_key={_apiKey}");
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