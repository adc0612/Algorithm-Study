#include <iostream>
using namespace std;

struct ListNode{
	int val;
	ListNode *next;
	ListNode(int x): val(x), next (NULL){}
};

ListNode* MergeTwoLists(ListNode* l1, ListNode* l2){
	if(l1 == NULL) 
		return l2;
	if(l2 == NULL)
		return l1;

	//head of the list to return
	ListNode* head = NULL;
	
	//find first element
	if(l1->val < l2->val){
		head = l1;
		l1 = l1 ->next;
	}
	else{
		head = l2;
		l2 = l2 ->next;
	}

	//pointer to form new list
	ListNode* p = head;


	while(l1 && l2){
		if(l1->val < l2 -> val){
			p->next = l1;
			l1 = l1->next;
		}
		else{
			p->next =l2;
			l2 = l2-> next;
		}
		p= p->next;
	}

	//add the rest of the tail, and done;
	if(l1)
		p->next = l1;
	else
		p->next = l2;
	
	return head;
}




