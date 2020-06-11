using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BugTrackerProject.Model
{
    public class BugDBContext : DbContext
    {

        public BugDBContext(DbContextOptions<BugDBContext> options):base(options)
        {

        }

        public DbSet <Bug> Bugs { get; set; }
    }
}
