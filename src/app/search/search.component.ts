import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data = []
  flattenedGroup = []
  search = ''
  constructor() { }

    ngOnInit() {
     this.getData()
     this.getFlattenedData()
     console.log(this.flattenedGroup)
  }
    
  getFlattenedData(){
    this.getData().forEach(group => {
        if(Array.isArray(group.Group.DataSet)){
          group.Group.DataSet.forEach(dataset => {
            this.flattenedGroup.push({
              groupId: group.Group.Id, 
              groupName: group.Group.Name, 
              datasetId:dataset.Id,
              datasetName: dataset.Name
            })
          });
        }
    })
  }

   searchData(){
    let filteredData = []
    this.flattenedGroup = []
    this.getFlattenedData();
    if(this.search.length > 0) {
       this.flattenedGroup.forEach((post)=>{
          if(post.groupName.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || 
            post.datasetName.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ) {
              filteredData.push(post)
          }
        })
        this.flattenedGroup = filteredData
    } 
  }

  getData(){
    return  this.data = [
      {
        "Group": {
          "Id": "20",
          "Name": "BBB",
          "DataSet": [
            {
              "Id": "20-1",
              "Name": "B1 Dataset"
            },
            {
              "Id": "20-2",
              "Name": "B2 Dataset"
            },
            {
              "Id": "20-3",
              "Name": "B3 Dataset"
            },
            {
              "Id": "20-4",
              "Name": "B4 Dataset"
            }
          ]
        }
      },
      {
        "Group": {
          "Id": "10",
          "Name": "AAA",
          "DataSet": [
            {
              "Id": "10-2",
              "Name": "A2 Dataset"
            },
            {
              "Id": "10-3",
              "Name": "A3 Dataset"
            }
          ]
        }
      }
    ] 
  }
  
}
