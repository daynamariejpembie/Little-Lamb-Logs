import Link from "next/link";
import Image from "next/image";
import diaperButton from '../../Images/diaperButton.png';

export default function Shepherding() {
    return (
        <div>
        <div>
          <div className="px-10 py-5">
            <Link href="/home">Back</Link>
          </div>
        </div>
          <div>

            <div>
              <div className="flex flex-col items-center">
                <Link href="./shepherding/diapering">
                  <Image
                  src={diaperButton}
                  alt="Diaper Change Button"
                  width={100}
                  height={100}
                  />
              </Link>
              <h2>Diapering</h2>
              </div>
              
            </div>
          </div>
        
        </div>

    )
}