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

        internal  async Task<string> GetPopularMovies()
        {
            var client = new HttpClient();
            var response = await client.GetStringAsync($"{_baseURL}/popular?api_key={_apiKey}");
            return response;
        }
    }

    
}