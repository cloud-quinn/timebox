using AutoMapper;
using TimeBox.API.Models;
using TimeBox.DataAccess.Models;

namespace TimeBox.API.App_Start
{
    public static class AutoMapperConfig
    {
        private static MapperConfiguration _mapperConfiguration;
        public static void RegisterMappings()
        {
            _mapperConfiguration = new MapperConfiguration(cfg => {
                cfg.CreateMap<User, UserDto>();
                cfg.CreateMap<Task, TaskDto>();
                cfg.CreateMap<TaskGroup, TaskGroupDto>();
            }); 
        }

        public static IMapper GetMapper()
        {
            return _mapperConfiguration.CreateMapper();
        }
    }
}