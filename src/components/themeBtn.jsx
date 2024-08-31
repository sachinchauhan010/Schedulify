import { Moon, Sun } from 'lucide-react';
import useTheme from '../contexts/theme';

export default function ThemeBtn() {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    return (
        <div>
            {themeMode === 'light' ? (
                <Moon onClick={darkTheme} className='text-gray-900'/>
            ) : (
                <Sun onClick={lightTheme} className='text-gray-50'/>
            )}
        </div>
    );
}
