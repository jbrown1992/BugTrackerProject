using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BugTrackerProject.Model;

namespace BugTrackerProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BugController : ControllerBase
    {
        private readonly BugDBContext _context;

        public BugController(BugDBContext context)
        {
            _context = context;
        }

        // GET: api/Bug
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bug>>> GetBugs()
        {
            return await _context.Bugs.ToListAsync();
        }

        // GET: api/Bug/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bug>> GetBug(int id)
        {
            var bug = await _context.Bugs.FindAsync(id);

            if (bug == null)
            {
                return NotFound();
            }

            return bug;
        }

        // PUT: api/Bug/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBug(int id, Bug bug)
        {
            bug.id = id;

            _context.Entry(bug).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BugExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Bug
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Bug>> PostBug(Bug bug)
        {
            _context.Bugs.Add(bug);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBug", new { id = bug.id }, bug);
        }

        // DELETE: api/Bug/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Bug>> DeleteBug(int id)
        {
            var bug = await _context.Bugs.FindAsync(id);
            if (bug == null)
            {
                return NotFound();
            }

            _context.Bugs.Remove(bug);
            await _context.SaveChangesAsync();

            return bug;
        }

        private bool BugExists(int id)
        {
            return _context.Bugs.Any(e => e.id == id);
        }
    }
}
