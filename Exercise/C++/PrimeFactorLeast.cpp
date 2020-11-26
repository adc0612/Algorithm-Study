#include <iostream>
#include <vector>
using namespace std;

int leastPrimeFactor(int n){

	vector<int> list(n+1,0);

	//1�� ���μ��� 1�̴�
	list[1] = 1;

	for(int i =2;i<=n;i++){
		//list[i] == 0
		//���� i�� �Ҽ�
		if(list[i] == 0){
			//�Ҽ��� �ڱ��ڽ���
			//���μ��� ����
			list[i] = i;

			for(int j = i+i;j<=n;j+=i){
				if(list[j] ==0){
					list[j] = i;
				}
			}
		}
	}
	if(list[n] == n){
		return 1;
	}else{
		return list[n];
	}
}

int main(){
	int n;
	cin >> n;
	cout<< leastPrimeFactor(n)<<'\n';
}

