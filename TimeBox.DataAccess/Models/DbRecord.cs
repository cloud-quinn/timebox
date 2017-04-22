using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeBox.DataAccess.Models
{
    public class DbRecord
    {
        public Guid Id { get; set; }
        public DateTime Created { get; set; }

        public DateTime Modified { get; set; }

        public bool Active { get; set; }

        public DbRecord()
        {
            this.Id = Guid.NewGuid();
            this.Created = DateTime.Now;
            this.Modified = DateTime.Now;
            this.Active = true;
        }
    }
}
