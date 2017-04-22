using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeBox.API.Services
{
    public interface IAuthService
    {
        void Authenticate();

        void Register();

        void ClearSession();
    }
}
