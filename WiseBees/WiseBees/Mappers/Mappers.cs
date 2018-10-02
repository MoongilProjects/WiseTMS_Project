using AutoMapper;
using WiseBees.Web.Entities;
using WiseBees.Web.Models;

namespace AngularASPNETCore2WebApiAuth.ViewModels.Mappings
{
    public class Mappers : Profile
    {
        public Mappers()
        {
            CreateMap<RegistrationModel, AppUser>().ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));
        }
    }
}