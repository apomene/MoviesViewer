using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MovieViewer.Models
{
    public class MovieModel
    {
        public class MoviePage
        {
            int page { get; set; }
            int total_results { get; set; } = 10000;
            int total_pages { get; set; } = 500;
            List<Movie> result { get; set; } 
        }

        public class Movie
        {
            float popularity { get; set; }
            int votes_count { get; set; }
            string poster_path { get; set; }
            int id { get; set; }
            bool adult { get; set; }
            string backdrop_path { get; set; }
            string original_language { get; set; }
            string original_title { get; set; }
            List<int> genre_ids { get; set; }
            string title { get; set; }
            float vote_average { get; set; }
            string overview { get; set; }
            string release_date { get; set; }
        }
    }
}