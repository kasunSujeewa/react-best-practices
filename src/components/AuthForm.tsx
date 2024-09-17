// AuthForm.tsx
import { createContext, useContext, useState, ReactNode, FormEvent, ChangeEvent } from 'react';
import { Input } from "@/components/ui/input"
import ComboBox from './ComboBox';



interface AuthFormContextProps {
    values: Record<string, string>;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AuthFormContext = createContext<AuthFormContextProps | undefined>(undefined);

interface AuthFormProps {
    children: ReactNode;
    onSubmit: (values: Record<string, string>) => void;
}

const AuthForm = ({ children, onSubmit }: AuthFormProps) => {
    const [values, setValues] = useState<Record<string, string>>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(values);
    };

    return (
        <AuthFormContext.Provider value={{ values, handleChange }}>
            <form onSubmit={handleSubmit} className="space-y-4 mx-auto p-1 rounded">
                {children}
            </form>
        </AuthFormContext.Provider>
    );
};

const useAuthForm = () => {
    const context = useContext(AuthFormContext);
    if (!context) {
        throw new Error('useAuthForm must be used within an AuthForm');
    }
    return context;
};

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
}

const InputSec = ({ type, name, placeholder }: InputProps) => {
    const { values, handleChange } = useAuthForm();
    return (
        <Input
            type={type}
            name={name}
            placeholder={placeholder}
            value={values[name] || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 my-4 custom-input bg-black"
            required
        />
    );
};

interface ButtonProps {
    children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
    return (
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            {children}
        </button>
    );
};

interface optionData {
    value: string;
    label: string;
}

interface SelectionProps {
    options: Array<optionData>;
    children: string
}

const SelectionsInput = ({options,children}: SelectionProps) =>{
    const { values, handleChange } = useAuthForm();
    return(
        <>
        <ComboBox data={options} children={children} value={values[name] || ''} onChange={handleChange}/>
        </>
    )
}

interface SignInProps {
    children: ReactNode;
}

const SignIn = ({ children }: SignInProps) => {
    return <div className='bg-black text-white'>
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        {children}
    </div>;
};

interface SignUpProps {
    children: ReactNode;
}

const SignUp = ({ children }: SignUpProps) => {
    return <div className='bg-black text-white'>
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        {children}</div>;
};

AuthForm.Input = InputSec;
AuthForm.Button = Button;
AuthForm.SignIn = SignIn;
AuthForm.SignUp = SignUp;
AuthForm.Select = SelectionsInput;

export default AuthForm;
