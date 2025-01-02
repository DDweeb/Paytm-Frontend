import { Appbar } from '../components/Appbar';
import { Balance } from '../components/balance';
import { Users } from '../components/users';

export function Dashboard() {
    return (
        <div>
            <Appbar></Appbar>
            <div className='m-8'>
                <Balance ></Balance>
                <Users></Users>
            </div>
        </div>
    )
}