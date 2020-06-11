using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BugTrackerProject.Model
{
    public class Bug
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string title { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string priority { get; set; }

        [Column(TypeName = "nvarchar(500)")]
        public string summary { get; set; }

    }
}
