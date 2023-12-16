import { theme } from "../../Core/theme.ts";


export const homeIcon = (focused: any) => {
  const color = focused ? "#E8E8E8" : theme.colors.primary;
  return `<svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> 
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 13.0005C10.5 11.8959 11.3954 11.0005 12.5 11.0005C13.6046 11.0005 14.5 11.8959 14.5 13.0005C14.5 14.1051 13.6046 15.0005 12.5 15.0005C11.9696 15.0005 11.4609 14.7898 11.0858 14.4147C10.7107 14.0396 10.5 13.5309 10.5 13.0005Z" 
      stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.627 7.07343L10.359 5.55343C11.6913 4.81552 13.3097 4.81552 14.642 5.55343L17.374 7.07343C18.6778 7.78618 19.4919 9.15054 19.5 10.6364V14.8184C19.4649 17.1628 17.5363 19.0349 15.192 19.0004H9.808C7.46367 19.0349 5.53509 17.1628 5.5 14.8184V10.6364C5.50829 9.15033 6.32281 7.78591 7.627 7.07343Z" 
      stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
    </g></svg>
  `;
};

export const addIcon = (focused: any) => {
  const color = focused ? "#E8E8E8" : theme.colors.primary;
  return `<svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
<g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 12.0002C5.50024 8.66068 7.85944 5.78639 11.1348 5.1351C14.4102 4.48382 17.6895 6.23693 18.9673 9.32231C20.2451 12.4077 19.1655 15.966 16.3887 17.8212C13.6119 19.6764 9.91127 19.3117 7.55 16.9502C6.23728 15.6373 5.49987 13.8568 5.5 12.0002Z" 
stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
<path d="M9.875 11.2502C9.46079 11.2502 9.125 11.586 9.125 12.0002C9.125 12.4145 9.46079 12.7502 9.875 12.7502V11.2502ZM12.5 12.7502C12.9142 12.7502 13.25 12.4145 13.25 12.0002C13.25 11.586 12.9142 11.2502 12.5 11.2502V12.7502ZM12.5 11.2502C12.0858 11.2502 11.75 11.586 11.75 12.0002C11.75 12.4145 12.0858 12.7502 12.5 12.7502V11.2502ZM15.125 12.7502C15.5392 12.7502 15.875 12.4145 15.875 12.0002C15.875 11.586 15.5392 11.2502 15.125 11.2502V12.7502ZM13.25 12.0002C13.25 11.586 12.9142 11.2502 12.5 11.2502C12.0858 11.2502 11.75 11.586 11.75 12.0002H13.25ZM11.75 14.6252C11.75 15.0395 12.0858 15.3752 12.5 15.3752C12.9142 15.3752 13.25 15.0395 13.25 14.6252H11.75ZM11.75 12.0002C11.75 12.4145 12.0858 12.7502 12.5 12.7502C12.9142 12.7502 13.25 12.4145 13.25 12.0002H11.75ZM13.25 9.37524C13.25 8.96103 12.9142 8.62524 12.5 8.62524C12.0858 8.62524 11.75 8.96103 11.75 9.37524H13.25ZM9.875 12.7502H12.5V11.2502H9.875V12.7502ZM12.5 12.7502H15.125V11.2502H12.5V12.7502ZM11.75 12.0002V14.6252H13.25V12.0002H11.75ZM13.25 12.0002V9.37524H11.75V12.0002H13.25Z" 
fill=${color}></path> </g></svg>
  `;
};
export const likeIcon = (focused: any) => {
  const color = focused ? "#ff0000" : theme.colors.primary;
  return `<svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" 
stroke=${color}><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
<g id="SVGRepo_iconCarrier"> 
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4997 18.9911L9.5767 15.9911L6.6767 12.9911C5.10777 11.3331 5.10777 8.73809 6.6767 7.08009C7.44494 6.34175 8.48548 5.95591 9.54937 6.01489C10.6133 6.07387 11.6048 6.57236 12.2867 7.39109L12.4997 7.60009L12.7107 7.38209C13.3926 6.56336 14.3841 6.06487 15.448 6.00589C16.5119 5.94691 17.5525 6.33275 18.3207 7.07109C19.8896 8.72909 19.8896 11.3241 18.3207 12.9821L15.4207 15.9821L12.4997 18.9911Z"
 stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  `;
};
export const commentIcon = (focused: any) => {
  const color = focused ? "#E8E8E8" : theme.colors.primary;
  return `<svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
<g id="SVGRepo_iconCarrier"> 
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 12C5.49988 14.613 6.95512 17.0085 9.2741 18.2127C11.5931 19.4169 14.3897 19.2292 16.527 17.726L19.5 18V12C19.5 8.13401 16.366 5 12.5 5C8.63401 5 5.5 8.13401 5.5 12Z" 
stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
<path d="M9.5 13.25C9.08579 13.25 8.75 13.5858 8.75 14C8.75 14.4142 9.08579 14.75 9.5 14.75V13.25ZM13.5 14.75C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25V14.75ZM9.5 10.25C9.08579 10.25 8.75 10.5858 8.75 11C8.75 11.4142 9.08579 11.75 9.5 11.75V10.25ZM15.5 11.75C15.9142 11.75 16.25 11.4142 16.25 11C16.25 10.5858 15.9142 10.25 15.5 10.25V11.75ZM9.5 14.75H13.5V13.25H9.5V14.75ZM9.5 11.75H15.5V10.25H9.5V11.75Z" 
fill=${color}></path> </g></svg>
  `;
};
export const sendIcon = (focused: any) => {
  const color = focused ? "#E8E8E8" : theme.colors.primary;
  return `<svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.455 9.8834L7.063 4.1434C6.76535 3.96928 6.40109 3.95274 6.08888 4.09916C5.77667 4.24558 5.55647 4.53621 5.5 4.8764C5.5039 4.98942 5.53114 5.10041 5.58 5.2024L7.749 10.4424C7.85786 10.7903 7.91711 11.1519 7.925 11.5164C7.91714 11.8809 7.85789 12.2425 7.749 12.5904L5.58 17.8304C5.53114 17.9324 5.5039 18.0434 5.5 18.1564C5.55687 18.4961 5.77703 18.7862 6.0889 18.9323C6.40078 19.0785 6.76456 19.062 7.062 18.8884L18.455 13.1484C19.0903 12.8533 19.4967 12.2164 19.4967 11.5159C19.4967 10.8154 19.0903 10.1785 18.455 9.8834V9.8834Z"
 stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  `;
};
export const userIcon = (focused: any) => {
  const color = focused ? "#E8E8E8" : theme.colors.primary;
  return `
    <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.25 7.75C15.25 9.26878 14.0188 10.5 12.5 10.5C10.9812 10.5 9.75 9.26878 9.75 7.75C9.75 6.23122 10.9812 5 12.5 5C14.0188 5 15.25 6.23122 15.25 7.75Z" 
    stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
    <path d="M7.74967 15.7338C7.73738 15.3197 7.39179 14.994 6.97775 15.0063C6.56372 15.0186 6.23804 15.3642 6.25033 15.7782L7.74967 15.7338ZM10.385 18.95V18.2C10.3779 18.2 10.3708 18.2001 10.3637 18.2003L10.385 18.95ZM14.615 18.95L14.6363 18.2003C14.6292 18.2001 14.6221 18.2 14.615 18.2V18.95ZM18.7497 15.7782C18.762 15.3642 18.4363 15.0186 18.0222 15.0063C17.6082 14.994 17.2626 15.3197 17.2503 15.7338L18.7497 15.7782ZM17.2503 15.6332C17.2626 16.0473 17.6082 16.373 18.0222 16.3607C18.4363 16.3484 18.762 16.0028 18.7497 15.5888L17.2503 15.6332ZM14.615 12.417V13.167C14.6221 13.167 14.6292 13.1669 14.6363 13.1667L14.615 12.417ZM10.385 12.417L10.3637 13.1667C10.3708 13.1669 10.3779 13.167 10.385 13.167V12.417ZM6.25033 15.5888C6.23804 16.0028 6.56372 16.3484 6.97775 16.3607C7.39179 16.373 7.73738 16.0473 7.74967 15.6332L6.25033 15.5888ZM6.25033 15.7782C6.3165 18.0081 8.17632 19.763 10.4063 19.6997L10.3637 18.2003C8.9611 18.2401 7.79129 17.1363 7.74967 15.7338L6.25033 15.7782ZM10.385 19.7H14.615V18.2H10.385V19.7ZM14.5937 19.6997C16.8237 19.763 18.6835 18.0081 18.7497 15.7782L17.2503 15.7338C17.2087 17.1363 16.0389 18.2401 14.6363 18.2003L14.5937 19.6997ZM18.7497 15.5888C18.6835 13.3589 16.8237 11.604 14.5937 11.6673L14.6363 13.1667C16.0389 13.1269 17.2087 14.2307 17.2503 15.6332L18.7497 15.5888ZM14.615 11.667H10.385V13.167H14.615V11.667ZM10.4063 11.6673C8.17632 11.604 6.3165 13.3589 6.25033 15.5888L7.74967 15.6332C7.79129 14.2307 8.9611 13.1269 10.3637 13.1667L10.4063 11.6673Z" 
    fill=${color}></path> </g></svg>
  `;
};

export const adminIcon = () => {
  return `
    <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 12.0002C5.50024 8.66068 7.85944 5.78639 11.1348 5.1351C14.4102 4.48382 17.6895 6.23693 18.9673 9.32231C20.2451 12.4077 19.1655 15.966 16.3887 17.8212C13.6119 19.6764 9.91127 19.3117 7.55 16.9502C6.23728 15.6373 5.49987 13.8568 5.5 12.0002Z" stroke="#429eff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 12.0002L11.333 14.3332L16 9.66724" stroke="#429eff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  `;
};

