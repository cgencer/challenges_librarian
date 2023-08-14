export interface BaseController {
    create_user: (req: any, res: any) => void;
    login_user: (req: any, res: any) => void;
    get_content: (req: any, res: any) => void;
    get_contents: (req: any, res: any) => void;
    create_content: (req: any, res: any) => void;
    update_content: (req: any, res: any) => void;
    delete_content: (req: any, res: any) => void;
    get_user: (req: any, res: any) => void;
    update_user: (req: any, res: any) => void;
    delete_user: (req: any, res: any) => void;
}
