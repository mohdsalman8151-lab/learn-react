import {useState} from 'react'

function AdvanchedForm() {
    const [formData, setFormData] = useState({
        country: 'India',
        gender : '',
        skill: false
    });
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  const handleChange = (e) =>{
    const {name, type, value, checked} = e.target
    setFormData((prev)=>({
        ...prev,
        [name]: type === "checkbox" ? checked :  value

    }))
  }
  return (
    <div className='w-[100%] flex flex-wrap justify-center items-center border bg-gray-400 border-gray-300 rounded-lg shadow-md p-5'>
            <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label className="block mb-2 font-medium text-gray-700">
                    Select Country
                </label>
                <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="country"
                     onChange={handleChange} 
                     value= {formData.country}
                >
                    <option value="">Choose Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                </select>
            </div>
            <div>
                <label className="block mb-3 font-medium text-gray-700">
                    Gender
                </label>

                <div className="space-y-2">
                    <label className="flex items-center gap-2">
                        <input 
                        type="radio"
                        name="gender"
                        value="male" 
                        onChange={handleChange} 
                        checked= {formData.gender ==="male"}
                         />
                        Male
                    </label>

                    <label className="flex items-center gap-2">
                        <input 
                        type="radio"
                         name="gender"
                          value="female" 
                           onChange={handleChange} 
                        checked= {formData.gender ==="female"}
                          />
                        Female
                    </label>

                    <label className="flex items-center gap-2">
                        <input
                         type="radio"
                          name="gender" 
                          value="other"
                           onChange={handleChange} 
                            checked= {formData.gender ==="other"}
                           />
                        Other
                    </label>
                </div>
            </div>
            <div>
                <label className="block mb-3 font-medium text-gray-700">
                    Skills
                </label>

                <div className="space-y-2">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" name="skill" value="html"
                         onChange={handleChange} 
                        checked= {formData.skill} />
                        HTML
                    </label>

                    {/* <label className="flex items-center gap-2">
                        <input type="checkbox" name="skills[]" value="css" />
                        CSS
                    </label>

                    <label className="flex items-center gap-2">
                        <input type="checkbox" name="skills[]" value="javascript" />
                        JavaScript
                    </label>

                    <label className="flex items-center gap-2">
                        <input type="checkbox" name="skills[]" value="react" />
                        React
                    </label> */}
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
                Submit
            </button>

        </form>
    </div>
  )
}

export default AdvanchedForm