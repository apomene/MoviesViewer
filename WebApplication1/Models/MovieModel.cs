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
            public int page { get; set; }
            public int total_results { get; set; } = 10000;
            public int total_pages { get; set; } = 500;
            public List<Movie> results { get; set; }
        }

        public class Movie
        {
            public float popularity { get; set; }
            public int votes_count { get; set; }
            public string poster_path { get; set; }
            public int id { get; set; }
            public bool adult { get; set; }
            public string backdrop_path { get; set; }
            public string original_language { get; set; }
            public string original_title { get; set; }
            public List<int> genre_ids { get; set; }
            public string title { get; set; }
            public float vote_average { get; set; }
            public string overview { get; set; }
            public string release_date { get; set; }
        }

        public class ImageObject
        {
            public int id { get; set; }
            public List<Poster> backdrops { get; set; }
            public List<Poster> posters { get; set; }
        } 
        
        public class Poster
        {
            public float aspect_ratio { get; set; }
            public string file_path { get; set; }
            public int height { get; set; }
            public int width { get; set; }
            public float vote_average { get; set; }
            public int vote_count { get; set; }
        }
    }
}


