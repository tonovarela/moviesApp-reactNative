
import  ImageColors  from 'react-native-image-colors'


export const getColors = async (path: string) => {
    
    const colores = await ImageColors.getColors(path, {})
 
    let primary;
    let secondary;
    switch (colores.platform) {
        case 'android':
            primary = colores.dominant;
            secondary = colores.average
            break
        
        case 'ios':
            primary = colores.primary;
            secondary = colores.secondary;
            break
            default:
            throw new Error('Unexpected platform key')
    }
 
    return [primary, secondary]
    

}