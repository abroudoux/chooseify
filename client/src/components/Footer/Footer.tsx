export default function Footer() {
    return (
        <footer>
            <div className="h-auto w-full flex-col-center p-6 bg-grey-dark rounded-b-lg">
                <div className="flex-col-center text-sm text-grey-light font-light opacity-70 text-center">
                    <p>
                        Released under the <span><a href="https://opensource.org/license/mit/" target="_blank" className="text-white">MIT License.</a></span>
                    </p>
                    <p>
                        Copyright © 2023 <span><a href="https://github.com/abroudoux" target="_blank" className="text-green">Arthur Broudoux</a></span>
                    </p>
                </div>
            </div>
        </footer>
    );
};