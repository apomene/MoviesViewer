using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MovieViewer.Models;

namespace MovieViewer.ViewModel
{
    public class MoviesViewModel
    {
        public List<MovieModel.Movie> movies { get; set; }
    }
}