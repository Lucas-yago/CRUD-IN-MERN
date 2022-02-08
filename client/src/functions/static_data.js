export const getNameType = (value) => {
    const role = ['Admin','Mananger','Employee'];
    return role[value-1];
};

export const getColorLabel = (value) => {
    const roleColor = ['primary','default','secondary'];
    return roleColor[value-1];
};