using AutoMapper;
using TimeBox.API.App_Start;
using TimeBox.API.Models;
using TimeBox.DataAccess.Models;

namespace TimeBox.API.Services
{

    public class UserService
    {
        private IMapper _mapper;
        private TimeBox.DataAccess.Services.IUserService _dbUserService;

        public UserService(TimeBox.DataAccess.Services.IUserService dbUserService)
        {
            _mapper = AutoMapperConfig.GetMapper();
            _dbUserService = dbUserService;
        }

        public DbResult Register(UserDto user)
        {
            return _dbUserService.SaveUser(_mapper.Map<UserDto, User>(user)).Result;
        }
    }
}