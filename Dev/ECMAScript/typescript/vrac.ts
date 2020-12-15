//------------------------------------ readonly ------------------------------------

interface IEmployee {
    empCode: number;
    empName: string;
}

let emp1: Readonly<IEmployee> = {
    empCode:1,
    empName:"Steve"
}

//------------------------------------

interface IEmployee {
    readonly empCode: number;
    empName: string;
}

//------------------------------------

class ClasseMere {
	private _firstname: string;
	private _lastname;
	readonly empCode: number;		// readonly, compile error if modified
}

