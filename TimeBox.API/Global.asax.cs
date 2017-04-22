using Autofac;
using System.Web.Http;
using TimeBox.API.App_Start;

namespace TimeBox.API
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            var builder = new ContainerBuilder();
            builder.RegisterType<TimeBox.API.Services.UserService>().As<TimeBox.API.Services.IUserService>();
            builder.RegisterType<TimeBox.DataAccess.Services.UserService>().As<TimeBox.DataAccess.Services.IUserService>();
            AutoMapperConfig.RegisterMappings();
        }
    }
}
