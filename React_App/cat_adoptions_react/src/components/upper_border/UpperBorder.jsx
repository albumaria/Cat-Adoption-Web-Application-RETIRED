import "./UpperBorder.css"
import React from "react";

const UpperBorder = ( {content} ) => {
    return (
        <div>
            <svg width="100%" height="100%" viewBox="0 0 1548 202" fill="none" xmlns="http://www.w3.org/2000/svg" className="upper-border">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0C8.9543 0 0 8.95432 0 20V167.021V167.896H0.0131634C0.568527 186.327 18.6266 201.125 40.822 201.125C63.0173 201.125 81.0754 186.327 81.6308 167.896H81.6571C82.2124 186.327 100.271 201.125 122.466 201.125C144.661 201.125 162.719 186.327 163.275 167.896H163.301C163.856 186.327 181.915 201.125 204.11 201.125C226.305 201.125 244.363 186.327 244.919 167.896H244.945C245.493 186.327 263.329 201.125 285.25 201.125C307.171 201.125 325.006 186.327 325.555 167.896H325.581C326.136 186.327 344.195 201.125 366.39 201.125C387.939 201.125 405.588 187.177 407.106 169.497C408.624 187.177 426.273 201.125 447.822 201.125C447.857 201.125 447.893 201.125 447.928 201.125C447.963 201.125 447.999 201.125 448.034 201.125C469.582 201.125 487.231 187.177 488.75 169.498C490.269 187.177 507.917 201.125 529.466 201.125C529.67 201.125 529.873 201.124 530.076 201.122C530.279 201.124 530.482 201.125 530.686 201.125C550.82 201.125 567.55 188.948 570.898 172.928C572.606 181.101 577.798 188.275 585.148 193.341C592.367 198.726 601.89 202 612.33 202C632.645 202 649.495 189.602 652.629 173.368C656.145 189.171 672.547 201.125 692.25 201.125C692.536 201.125 692.822 201.123 693.106 201.118C693.395 201.123 693.684 201.125 693.974 201.125C713.244 201.125 729.396 189.97 733.682 174.968C737.968 189.97 754.119 201.125 773.39 201.125C773.762 201.125 774.134 201.121 774.504 201.113C774.874 201.121 775.245 201.125 775.618 201.125C794.888 201.125 811.04 189.97 815.326 174.967C819.611 189.97 835.763 201.125 855.034 201.125C855.324 201.125 855.613 201.123 855.901 201.118C856.186 201.123 856.471 201.125 856.758 201.125C878.037 201.125 895.466 187.181 896.97 169.506C898.493 187.181 916.14 201.125 937.686 201.125C937.721 201.125 937.756 201.125 937.792 201.125C937.827 201.125 937.862 201.125 937.898 201.125C959.284 201.125 976.829 187.386 978.577 169.897C979.816 187.801 997.588 202 1019.33 202C1039.27 202 1055.87 190.055 1059.44 174.263C1059.84 172.711 1060.12 171.12 1060.26 169.497C1061.15 179.941 1067.68 189.083 1077.32 194.817C1083.91 198.789 1091.97 201.125 1100.68 201.125C1100.73 201.125 1100.78 201.125 1100.83 201.125C1100.88 201.125 1100.92 201.125 1100.97 201.125C1123.17 201.125 1141.23 186.327 1141.78 167.896H1141.81C1142.36 186.327 1160.42 201.125 1182.62 201.125C1204.81 201.125 1222.87 186.327 1223.43 167.896H1223.45C1224 186.327 1241.84 201.125 1263.76 201.125C1285.68 201.125 1303.51 186.327 1304.06 167.896H1304.09C1304.64 186.327 1322.7 201.125 1344.9 201.125C1367.09 201.125 1385.15 186.327 1385.71 167.896H1385.73C1386.29 186.327 1404.35 201.125 1426.54 201.125C1448.74 201.125 1466.8 186.327 1467.35 167.896H1467.38C1467.93 186.327 1485.76 201.125 1507.68 201.125C1529.6 201.125 1547.44 186.327 1547.99 167.896H1548V167.106L1548 167.021L1548 166.937V20C1548 8.95431 1539.05 0 1528 0H1121H427H20Z" fill="#F2B45A"/>
                <text
                    x="70"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="start"
                    className="upper-border-text"
                >
                    {content}
                </text>

            </svg>
        </div>
    )
}







export default UpperBorder