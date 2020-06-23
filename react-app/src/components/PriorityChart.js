import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from 'react-redux'

const PriorityChart = () => {

    const state = useSelector(state => state.bug.list)

    const priorityData = {
        bugPrio : ['Blocker', 'Critical', 'Major', 'Minor', 'Trivial'],
        count : [0, 0, 0, 0, 0]

    }

    



    for (let index = 0; index < state.length; index++) {
        const element = state[index].priority;
        console.log(element)
        if (element === 'Blocker')
        priorityData.count[0]++
        if (element === 'Critical')
        priorityData.count[1]++
        if (element === 'Major')
        priorityData.count[2]++
        if (element === 'Minor')
        priorityData.count[3]++
        if (element === 'Trivial')
        priorityData.count[4]++
    }



    function removeDuplicates(data) {
        return data.filter((value, index) => data.indexOf(value) === index)
    }
    

    priorityData.bugPrio = removeDuplicates(priorityData.bugPrio)



    const data = {
        labels: priorityData.bugPrio,


                datasets: [
                    {
                        data: priorityData.count,
                        backgroundColor: ['#000000', '#ff0000', '#ffa500', '#ffff00', '#00df00'],
                        borderWidth: 0
                    }
                ]        
    }

            return(
        <div>
            <Pie data={data}></Pie>
        </div>
    )
            

}

export default PriorityChart;


//     const state = useSelector(state => state.bug.list)
    
//     const [chartData, setChartData] = useState({state})


//     for (let index = 0; index < state.length; index++) {
//         const element = state[index];
//         console.log(element)
        
//     }
    

//     const chart = () => {



     
//         setChartData({

        

            

//         labels: ['Blocker', 'Critical', 'Major', 'Minor', 'Trivial'],
//         datasets: [
//             {
//                 labels: 'level of thickness',
//                 data: [10, 45, 12, 76, 69],
               
//             }
//         ]    
    
//     })

//     }

//     useEffect(() => {
//         chart(state)
//     }, [])

//     return(
//         <div>
//             <Pie data={chartData}></Pie>
//         </div>
//     )

// }

